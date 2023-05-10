'use strict'

import { pythonBridge } from 'python-bridge'

const socket = io.connect('http://' + document.domain + ':' + location.port)
socket.on('connect', function () {
  console.log('Connected')
})
socket.on('message', function (msg) {
  $('#chatbox').append('<p>Bot: ' + msg + '</p>')
})

$('#user_input').on('keydown', function (e) {
  if (e.keyCode == 13) {
    let input = $(this).val()
    if (input) {
      $('#chatbox').append('<p>You: ' + input + '</p>')
      socket.send(input)
      $(this).val('')
    }
  }
})
