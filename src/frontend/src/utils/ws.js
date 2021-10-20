import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'

let stompClient = null
// const handlers = [(body) => {
//   console.log(`This is handler`)
//   console.log(body)
// }]

export function connect () {
  console.log('*********************** Connect function was run !')

  const socket = () => new SockJS('/ws_0001')
  stompClient = Stomp.over(socket)
  stompClient.debug = () => {}
  stompClient.connect({}, () => {
    // stompClient.subscribe(
    //   '/front/notifications',
    //   message => {
    //     handlers.forEach(handler => handler(JSON.parse(message.body)))
    //   })

    stompClient.subscribe('/front/notifications',
      message => { console.log(JSON.parse(message.body)) }
    ) // these are basically our endpoints on WS-connection at front-end
    // here we are catching messages from backend and handling them

    stompClient.subscribe('/front/messages',
      message => {
        console.log('/front/messages')
        console.log(JSON.parse(message.body))
      }
    )
  })

  console.log('CONNECTED WEB-SOCKETS AT FRONTEND :)')
}

// export function addHandler (handler) {
//   handlers.push(handler)
// }

export function disconnect () {
  if (stompClient !== null) {
    stompClient.disconnect()
  }
  console.log('Disconnected')
}

export function sendMessage (message) {
  stompClient.send('/back/message', {}, JSON.stringify(message))
  // JSON.stringify(message) - this is obligatory!
}
