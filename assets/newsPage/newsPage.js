url='https://newsapi.org/v2/everything?q=agriculture&apiKey=67ac316ae32745fcb7a5d5055a85461f'


let req=new Request(url);
fetch(req)
    .then(res => res.json())
    .then(function(data){
        console.log(data)
        console.log(data['totalResults'])
        for(let i=3;i<data['totalResults'];i++){
            if(i<=10){
                let extra=i-2
                extra=String(extra)
                hid="sech1"+extra
                pid="secp"+extra
                imgid="img"+extra
                if(data['articles'][i]['urlToImage']!=null){
                document.getElementById(imgid).src=data['articles'][i]['urlToImage']
                }
                else{
                    document.getElementById(imgid).src ='images.jpeg'
                }
                document.getElementById(pid).innerText=data['articles'][i]['content']
                document.getElementById(hid).innerText=data['articles'][i]['title']
            }
            else{
                let section=document.createElement('section')
                section.setAttribute("id","mainsec_continue")    
                let img=document.createElement('img')
                console.log(data)
                if(data['articles'][i]['urlToImage']!=null && data['articles'][i]['urlToImage']!=undefined ){
                    
                    img.setAttribute("src",data['articles'][i]['urlToImage'])  
                }
                else{
                    img.setAttribute("src",'images.jpeg')  
                } 
                img.setAttribute("class","continues")
                let subsection=document.createElement('section')
                subsection.setAttribute("class","sec_continue")
                let h=document.createElement('h2')
                h.textContent=data['articles'][i]['title']
                let p=document.createElement('p')
                p.textContent=data['articles'][i]['content']
                subsection.append(h)
                subsection.append(p)


                section.append(img)
                section.append(subsection)

                let parent=document.getElementById("body")
                let following=document.getElementById("continues")
                console.log(section)
                parent.insertBefore(section,following)

            }
        }

    })
    
