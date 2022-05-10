import {
    Header,
    Footer,
    NewsSection,
    NewsPopup,
} from "../components/components";
import React from "react";
import api from "../utils/Api.js";

const News = () => {
    const [posts, setPosts] = React.useState([]);
    const [selectedPost, setSelectedPost] = React.useState({});
    const [isNewsPopupOpen, SetIsNewsPopupOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [currentPost, setCurrentPost] = React.useState(0);

    React.useEffect(() => {
        setIsLoading(true)
        api
            .getCardsData(currentPost)
            .then((data) => {
                if (data.length < 5){
                    document.querySelector('.news-section__button').disabled = true;
                }
                setPosts([...posts, ...data]);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
    },[currentPost]);

    function openNewsPopup(post) {
        document.querySelector('.body').classList.add('body_non-scroll')
        SetIsNewsPopupOpen(true)
        setSelectedPost(post)
    }

    function closePopup() {
        document.querySelector('.body').classList.remove('body_non-scroll')
        SetIsNewsPopupOpen(false)
    }

    return (
        <div className="news">
            <Header/>
            <NewsSection posts={posts} handlePopup={openNewsPopup} currentPost={currentPost} setCurrentPost={setCurrentPost} isLoading={isLoading}/>
            <Footer/>
            <NewsPopup post={selectedPost} onClose={closePopup} isOpen={isNewsPopupOpen}/>
        </div>
    );
};

export default News;
