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

    React.useEffect(() => {
        setIsLoading(true)
        api
            .getCardsData()
            .then((data) => {
                setPosts(data);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function openNewsPopup(post) {
        SetIsNewsPopupOpen(true)
        setSelectedPost(post)
    }

    function closeAllPopups() {
        SetIsNewsPopupOpen(false)
    }

    return (
        <div className="news">
            <Header/>
            <NewsSection posts={posts} handlePopup={openNewsPopup} isLoading={isLoading}/>
            <Footer/>
            <NewsPopup post={selectedPost} onClose={closeAllPopups} isOpen={isNewsPopupOpen}/>
        </div>
    );
};

export default News;
