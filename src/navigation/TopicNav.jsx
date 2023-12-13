import { MenuItem } from "@mui/material"
import { useNavigate } from "react-router-dom"


const TopicNav = ({topic, handleClose})=>{
    const navigate = useNavigate()
    const navigateToTopic = () => {
        navigate('/myfeed')
      }

 

return(
    <> <MenuItem
          onClick={() => {
            navigateToTopic(topic), handleClose()
          }}
        >
          {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
        </MenuItem>
    </>
)

}

export default TopicNav