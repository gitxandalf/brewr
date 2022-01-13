# brewr

• is a [Flickr](https://flickr.com/) clone made by Alexander Gangemi for the purpose of course work in App Academy and for use as an addition to his professional portfolio.

• On this site, users can currently sign up, log in (with or without a demo user) and create, read, update and destroy photos.

## Technologies Used:

Javascript | Node.js | NPM | HTML / JSX | CSS | React | Redux

![This is an image](https://i.imgur.com/SCUpszp.png)

## In order to run this application...

### Either:

#### A. Go to [brewr](https://brewr-aa.herokuapp.com/) in your browser 

### OR 

#### B: Clone / Download this repo and...

•  `npm install` within the frontend and backend directories

•  `npm start` within the backend directory under localhost:5000

•  `npm start` within the frontend directory under localhost:3000

## Future Features:

• Photo Albums

• Comments

## Technical Implementation:

### Before starting to code:

• As with any significant undertaking, planning is a crucial step ***especially when we were given one week to complete this project with one full feature.*** I had to consider

how closely I was going to clone Flickr, how I wanted my website to flow from page to page, where and how I would implement functionality and how I planned to style each page.

### Particular Challenges:

• What I found to be the most difficult was following the flow of code from frontend to backend and vice-versa, considering the React and React C.R.U.D. cycle. Overcoming my 
rough understanding involved diving into documentation, trial and error and collaboration with my classmates.  

• A simple example of this is the JSX snippet below. One must be able to **maintain and manipulate a state**, properly **build and manuever a database**, as well as utililze 
knowledge of React and Redux to effectively pass data back and forth through an application to render sites properly via code like the JSX below.

        <>

            <UserNav />
            
            <div className="my-photos-bg"></div>
            
            <div className="my-photos-container"></div>
            
            <div className="sidebar">
            
                <h2 className="my-photos-header">Your private reserve.</h2>
                
                <NavLink to="/add-a-brew" className="add">Add a brew</NavLink>
                
            </div>
            
            {allImages.map((image, id) => {
            
                return (
                
                    <div key={id} className="my-photos-images">
                    
                        <figure >
                        
                            <Link to={'/images/${image.id}'}>
                            
                                <img key={id} alt="" className="my-photos-spread" src={sessionUser.id === image.userId ? image.imageUrl : null} />
                                
                            </Link>
                            
                            <br />
                            
                            <NavLink hidden={sessionUser.id === image.userId ? false : true} to={'/images/${image.id}/edit'} value={image.id} className="edit">Edit</NavLink>
                            
                            <button hidden={sessionUser.id === image.userId ? false : true} className="delete" value={image.id} onClick={handleDelete}
                            
                            type="submit">Delete</button>
                            
                        </figure>
                        
                    </div>
                    
                )
                
            })}
            
        </>
        

