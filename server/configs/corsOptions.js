const allowedOrigins = [ 
    'https://parkitup-app.netlify.app'
] 

export const corsOptions = {
    origin: (origin, callback) => {
        if(!origin || allowedOrigins.includes(origin)){
            callback(null, true);
        }
        else{
            callback(new Error('Not allowed by CORS.'));
        }
    },

    credentials: true
}