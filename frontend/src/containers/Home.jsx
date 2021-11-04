import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../assets/img/loading.gif';
import postImage from '../assets/img/newspaper-icon-png.jpg';
import PostForm from '../components/Posts/PostForm';
import Post from '../components/Posts/Post';
import { fetchPosts } from '../reducks/posts/operations';
import { getPosts } from '../reducks/posts/selectors';
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import List from '../components/common/List';

const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const posts = getPosts(selector);
    let [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(fetchPosts({ page }));
        // eslint-disable-next-line
    }, []);

    // Infinite Scroll Pagination Flow
    const observer = useRef();

    // Reference to a very last post element
    const lastPostElement = useCallback(
        node => {
            if (isLoading) return;
            // Disconnect reference from previous element, so that new last element is hook up correctly
            if (observer.current) {
                observer.current.disconnect();
            }

            // Observe changes in the intersection of target element
            observer.current = new IntersectionObserver(async entries => {
                // That means that we are on the page somewhere, In our case last element of the page
                if (entries[0].isIntersecting && posts.next) {
                    // Proceed fetch new page
                    setIsLoading(true);
                    setPage(++page);
                    await dispatch(fetchPosts({ page }));
                    setIsLoading(false);
                }
            });

            // Reconnect back with the new last post element
            if (node) {
                observer.current.observe(node);
            }
        },
        // eslint-disable-next-line
        // [posts.next]
    );

    return (
        <>
         <Header/>
         <List/>
         <Footer/>
        </>
    );
};

export default Home;
