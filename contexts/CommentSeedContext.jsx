import { createContext, useState } from "react";

export const CommentSeedContext = createContext();

export const CommentSeedProvider = (props) => {
    const [commentSeed, setCommentSeed] = useState(false);



    return (
        <CommentSeedContext.Provider value={{ commentSeed, setCommentSeed }}>
            {props.children}
        </CommentSeedContext.Provider>
    );
};
