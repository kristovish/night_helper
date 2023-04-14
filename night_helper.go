package main
import (
	"fmt"
	"log"
	"io/ioutil"
	"encoding/json"
	"strings"
	
	discordgo "github.com/bwmarrin/discordgo"
	gogpt "github.com/sashabaranov/go-gpt3"
	
	)

type Config struct {
    DiscordToken string `json:"discord_token"`
    GPTAPIKey    string `json:"gpt_api_key"`
}


func main() {

  // Open config.json
file, err := ioutil.ReadFile("config.json")
if err != nil {
    log.Fatal(err)
}

// Unmarshal json to struct
var config Config
json.Unmarshal(file, &config)

// Inicializar sesión de Discord
discord, err := discordgo.New("Bot " + config.DiscordToken)
if err != nil {
    log.Fatal(err)
}

// Inicializar sesión de OpenAI
gogpt.APIKey = config.GPTAPIKey

// Asignar manejador de eventos de mensaje
discord.AddHandler(onMessage)

// Conectarse a Discord
err = discord.Open()
if err != nil {
    log.Fatal(err)
}


    // Mantener el bot en ejecución
    fmt.Println("Night Helper is now running. Press CTRL-C to exit.")
    <-make(chan struct{})
}

func onMessage(s *discordgo.Session, m *discordgo.MessageCreate) {
    // Ignorar mensajes enviados por el bot
    if m.Author.ID == s.State.User.ID {
        return
    }

    // Comprobar si el mensaje comienza con el prefijo de comando "/NH"
    if !strings.HasPrefix(m.Content, "/NH") {
        return
    }

    // Extraer el prompt del mensaje
    prompt := strings.TrimPrefix(m.Content, "/NH")

    // Enviar la pregunta a GPT-3
	response, err := gogpt.Completion(gogpt.CompletionOptions{
Engine: "text-ada-001",
Prompt: prompt,
MaxTokens: 100,
})
    if err != nil {
        log.Println(err)
        return
    }

    // Enviar la respuesta de GPT-3 al canal de Discord
    _, _ = s.ChannelMessageSend(m.ChannelID, response.Choices[0].Text)
}
