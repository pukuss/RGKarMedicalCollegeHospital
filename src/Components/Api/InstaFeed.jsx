import { useEffect , useState } from "react";
import instagramFeed from "../../conf/insta";

export default function instaFeed() {
      const [Postdata, setPostData] = useState();
        const [loading, setLoading] = useState(true);
        const [error , setError] = useState("");


    useEffect(() => {


        // fetch( `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${instagramFeed.ACCESS_TOKEN}`)
        fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${instagramFeed.ACCESS_TOKEN}`)
        .then(res => res.json())
        .then(data => {
            setPostData(data.data);
            setLoading(false)
            console.log();
            
        })
        .catch((error)=>{
            setError("WARNING TECH INSTAGRAM ERROR" + error)
        })
    }, []);

    return {Postdata, loading, error}
}