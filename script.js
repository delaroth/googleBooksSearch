



//html elements


const searchBox = document.querySelector('#searchBox')
const searchButton = document.querySelector('#searchButton')
const bookList = document.querySelector('#bookList')
 


searchButton.addEventListener("click", async function () {
    await axios({
        method: 'get',
        url: `https://www.googleapis.com/books/v1/volumes?q=${searchBox.value}&key=AIzaSyAC3_8cJAFoiV5tiwD62JBFwqeSwk4Lef4`,
       
    })
        .then(function (res) {
        
        bookList.innerHTML=''
        
        const booksFound = res.data.items.map((book)=>book.volumeInfo)
       
        console.log(booksFound)

        for (book of booksFound) {
            
            if (book.imageLinks|| book.description) {
                const li = document.createElement('li')
                li.classList.add('bookContainer')
                bookList.appendChild(li)
                  
                
                
                const bookInfo = document.createElement('div')
                bookInfo.classList.add('bookInfo')
                li.appendChild(bookInfo)
                
                const image = document.createElement('img')
                image.src = book.imageLinks ? book.imageLinks.thumbnail : 'https://static.thenounproject.com/png/82078-200.png'
                image.classList.add('bookImg')
                bookInfo.appendChild(image)  
    
                const section = document.createElement('div')
                section.classList.add('section')
                bookInfo.appendChild(section)
    
                const bookTitle = document.createElement('h2')
                bookTitle.classList.add('bookTitle')
                bookTitle.textContent = `${book.title}`
                section.appendChild(bookTitle)
    
                if (book.description) {
                    const bookDescription = document.createElement('p')
                    bookDescription.classList.add('bookDescription')
                    bookDescription.innerText = book.description
                    section.appendChild(bookDescription)
                }
                
            }
        }
      });
    
})

