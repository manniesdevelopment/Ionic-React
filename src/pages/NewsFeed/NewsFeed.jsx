import React, { useState, useEffect } from 'react';
import NewsCard from '../NewsCard/NewsCard';
// import Filter from '../Filters/Filters';
// import getInitialData from '../../Utils/HTTPWrapper/HttpWrapper';
import Axios from 'axios';
const NewsFeed = () => {

    // HTTPRequest.
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=c7ebb7a455e040f3ab6215d533017ed5");
        setData(res.data.articles);
        console.log(data);

    }
    useEffect(() => {
        console.log("-----under mounting --------");
        fetchData()
    }, []);

    if (!data)
        return null;

    return (
<>
        { console.log("------------------------------------Rendering---------------") }
    {

        data.map((a, i) => {
            console.log(a);
            return (<NewsCard article={a} key={i} />)
        })

    }
      </>  
    );
}
export default NewsFeed;