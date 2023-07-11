url='https://newsapi.org/v2/everything?q=agriculture&apiKey=67ac316ae32745fcb7a5d5055a85461f'


let req=new Request(url);
fetch(req)
    .then(res => res.json())
    .then(function(data){
        console.log(data)
        console.log(data['totalResults'])
        for(let i=3;i<data['totalResults'];i++){
            if(i<=11){
                let extra=i-2
                extra=String(extra)
                hid="sech1"+extra
                pid="secp"+extra
                imgid="img"+extra
                if(data['articles'][i]['urlToImage']!=null){
                //document.getElementById(imgid).src=data['articles'][i]['urlToImage']
                }
                //document.getElementById(pid).innerText=data['articles'][i]['content']
                //document.getElementById(hid).innerText=data['articles'][i]['title']
            }
            else{
                const node=document.getElementsByClassName("continues")
                const clone=node[0].cloneNode(true)
                clone.firstChild.src=data['articles'][i]['urlToImage']
                clone.lastChild.firstChild.innerHTML=data['articles'][i]['title']
                clone.lastChild.lastChild.innerHTML=data['articles'][i]['content']
                console.log(clone)
                document.getElementsByName('body').appendChild(clone)
            }
        }

    })
    


