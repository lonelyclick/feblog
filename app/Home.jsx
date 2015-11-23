import React, { Component } from 'react'

import 'isomorphic-fetch'
import 'normalize.css'

import styles from './Home.css'

export default class Home extends Component {
  state = {
    todos: []
  }

  componentWillMount() {
    this.fetchTodos()
  }

  fetchTodos() {
    fetch('/todos').then(res => {
      return res.json()
    }).then(res => {
      this.setState({
        todos: res
      })
    })
  }

  addTodo = event => {
    event.preventDefault()
    const value = this.refs.text.value

    fetch('/todos', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: value
      })
    }).then(() => {
      this.fetchTodos()
    })
  }

  deleteTodo = (event, id) => {
    event.preventDefault()

    fetch(`/todos/${id}`, {
      method: 'delete'
    }).then(() => {
      this.fetchTodos()
    })
  }

  updateTodo = (event, id, text) => {
    event.preventDefault()

    const newText = window.prompt('input a new text', text)

    fetch(`/todos/${id}`, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: newText
      })
    }).then(() => {
      this.fetchTodos()
    })
  }

  render() {
    const todoList = this.state.todos.map((todo, index) => {
      return (
        <tr key={`index-${index}`}>
          <td>{todo.id}</td>
          <td>{todo.text}</td>
          <td>
            <a
              href=""
              onClick={event => this.updateTodo(event, todo.id, todo.text)}>
              更新
            </a>
            <a
              href=""
              className={styles.linkDel}
              onClick={event => this.deleteTodo(event, todo.id)}>
              删除
            </a>
          </td>
        </tr>
      )
    })
    return (
      <div className={styles.root}>
        <table
          className={styles.table}
          cellSpacing="1"
          cellPadding="1">
          <thead>
            <tr>
              <th>id</th>
              <th>text</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {todoList}
          </tbody>
        </table>

        <form>
          <input
            type="text"
            ref="text"
          />
          <button
            type="button"
            onClick={this.addTodo}>
            add
          </button>
        </form>
      </div>
    )
  }
}
