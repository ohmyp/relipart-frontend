import React, {useEffect, useState} from 'react';
import api from "../../utils/Api";

import './Moderation.scss'

const Moderation = () => {
    const [posts, setPosts] = useState([])
    const baseUrl = "https://respawn-spb.ru"

    useEffect(() => {
        api.getCardsData()
            .then(res => {
                setPosts(res)
                console.log(res)
            })
            .catch(e => console.log(e))
    }, [])

    const handleDelete = (id) => {
        api.deleteCardData(id)
            .then(res => window.location.reload())
            .catch(e => console.log(e))
    }

    const handleCreate = (e) => {
        e.preventDefault()
        const title = e.target[0].value
        const description = e.target[1].value
        const text = e.target[2].value
        const imageUrl = e.target[3].value
        const date = new Date(Date.now())
        const formattedDate = `${date.getFullYear()}-${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`

        api.makeNewCardData(title, text, imageUrl, description, formattedDate)
            .then(res => window.location.reload())
            .catch(e => console.log(e))
    }
    return (
        <section className="moderation">
            <h2 className="moderation-title">Список новостей</h2>
            {posts.map(post => {
                return (
                    <>
                        <div className="moderation__post">
                            <div>
                                <h2 className="moderation__post-title">{post.id}. {post.title}</h2>
                                <p className="moderation__post-description">{post.description}</p>
                                <details className="moderation__post-details">
                                    <summary>Полный текст</summary>
                                    <p>{post.body}</p>
                                    <img src={post.image} alt=""/>
                                </details>
                            </div>
                            <button className="moderation__post-button" onClick={() => handleDelete(post.id)}>Удалить
                            </button>
                        </div>
                        <hr/>
                    </>
                )
            })}
            <hr/>
            <h2 className="moderation-title">Создание новости</h2>
            <form className="moderation__form" onSubmit={handleCreate}>
                <input className="moderation__form-input" type="text" placeholder="Заголовок"/>
                <input className="moderation__form-input" type="text" placeholder="Краткое описание"/>
                <textarea className="moderation__form-textarea" type="text" placeholder="Текст записи"/>
                <input className="moderation__form-input" type="text" placeholder="Ссылка на картинку"/>
                <button className="moderation__form-button" type='submit'>Создать запись</button>
            </form>

        </section>
    );
};

export default Moderation;