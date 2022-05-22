import axios from "axios";
import React from "react";
import NewsRow from "./NewsRow";

interface Props{
  search : string | undefined
  }

const NewTable: React.FC<Props> =({search})=>{

    const datas = [
        {
          title: "que es una blockchain",
          url: "wwww.blockchain.com",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab",
          author: "El flaco que creo la blockchain",
          urlToImage: "string",
          publishedAt: 45,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab"
        },
        {
          title: "que es una NFT",
          url: "wwww.NFT.com",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab",
          author: "El que hizo un nft",
          urlToImage: "string",
          publishedAt: 45,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab"
        },
        {
          title: "como se crean los nodos",
          url: "wwww.losnodos.com",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab",
          author: "el diario de japon",
          urlToImage: "string",
          publishedAt: 45,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab"
        },
        {
          title: "como saber precio de bitcoin",
          url: "wwww.lanoticia.com",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab",
          author: "Diario de ALemania",
          urlToImage: "string",
          publishedAt: 45,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab"
        },
        {
          title: "como cerrar mi wallet",
          url: "wwww.chauwallet.com",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab",
          author: "El loco de las wallet",
          urlToImage: "string",
          publishedAt: 45,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab"
        },
        {
          title: "que es una blockchain - bis",
          url: "wwww.blockchain.com",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab",
          author: "El flaco que creo la blockchain",
          urlToImage: "string",
          publishedAt: 45,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab"
        },
        {
          title: "que es una NFT - bis",
          url: "wwww.NFT.com",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab",
          author: "El que hizo un nft",
          urlToImage: "string",
          publishedAt: 45,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab"
        },
        {
          title: "como se crean los nodos - bis",
          url: "wwww.losnodos.com",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab",
          author: "el diario de japon",
          urlToImage: "string",
          publishedAt: 45,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab"
        },
        {
          title: "como saber precio de bitcoin - bis",
          url: "wwww.lanoticia.com",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab",
          author: "Diario de ALemania",
          urlToImage: "string",
          publishedAt: 45,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab"
        },
        {
          title: "como cerrar mi wallet - bis",
          url: "wwww.chauwallet.com",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab",
          author: "El loco de las wallet",
          urlToImage: "string",
          publishedAt: 45,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, officiis cum hic culpa optio laborum repellat assumenda ex minima ad nesciunt facilis tenetur dolore corrupti ipsam est perspiciatis ab"
        }
    ];

      
    const apiKeyNews ={ 
        key : "7bcc54cbdcd04f58a172645320bb0657"    
    }

    // const getDataNews = async()=>{
    //   const news = await axios.get('https://newsapi.org/v2/everything?q=bicoin&apiKey=' + apiKeyNews.key)
    //   console.log(news.data)
    // }

    // React.useEffect(()=>{
    //   getDataNews();
    // },[])

    const filteredNews = datas.filter((data)=>(
      data.title.toLowerCase().includes(String(search).toLowerCase()) ||
      data.content.toLowerCase().includes(String(search).toLowerCase()) ||
      data.author.toLowerCase().includes(String(search).toLowerCase())
    ))

    return(
        <div className="container infoContainer">
            <div className="row infoRow">
                {
                  filteredNews.length > 0 
                      ?
                        filteredNews.map((news, index) =>(
                          <div key={index + 1}>
                              {
                                <NewsRow data={news}/>
                              }
                          </div>
                        ))
                      :
                        <h1>no hay nada</h1> 
                }
            </div>
        </div>
    )
}

export default NewTable;








/*
news.title === search
                            ?
                              <RowInfo data={news}/>
                            :
                            <></>
*/