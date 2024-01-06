import Markdown from "markdown-to-jsx";

const MdComp = ({children}) => {
    return (
        <div 
        className="md-component"
        >
            <Markdown>
                {children}
            </Markdown>
        </div>
    )
}

export default MdComp;