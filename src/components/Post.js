import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        post: []
    }

    async componentDidMount() {
        //Peticion HTTP al pedir datos estos demoran, entonces se usa una funcion asyncrona
        //Este codigo va a tardar, entonces esperamos a que llegue y lo almacenamos en una variable
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        this.setState({ post: data })
    }

    render() {
        return (
            <div>

                <h2>Post</h2>
                {
                    this.state.post.map(post => {
                        return <div>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }

            </div>
        )
    }
}
