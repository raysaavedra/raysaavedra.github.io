import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

export default [
  {
    icon: <Home style={{color: "tomato"}}/>,
    title: "Home",
    path: "/",
  },
  // {
  //   icon: <AssignmentInd />,
  //   title: "Resume",
  //   path: "/resume",
  // },
  // {
  //   icon: <Apps />,
  //   title: "Portfolio",
  //   path: "/portfolio",
  // },
  {
    icon: <EmojiPeopleIcon style={{color: "tomato"}} />,
    title: "Say Hello",
    path: "/contact",
    outlined: true
  },
];
