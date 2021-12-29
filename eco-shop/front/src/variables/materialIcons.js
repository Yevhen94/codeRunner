import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import HomeIcon from "@mui/icons-material/Home";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { styled } from "@mui/material/styles";

// Custom styles for icons from MUI library
const customStyles = {
  all: {
    color: "inherit",
    fontSize: "16px",
    marginRight: "5px",
  },
  cart: {
    display: "block",
    width: "20px",
    height: "20px",
    color: "inherit",
  },
  cartForBtn: {
    marginRight: "20px",
    display: "block",
    width: "20px",
    height: "20px",
    color: "rgb(240, 235, 235)",
  },
  user: {
    width: "25px",
    height: "25px",
    color: "inherit",
    display: "block",
  },
  arrow: {
    fontSize: "30px",
    color: "inherit",
  },
  scroll: {
    fontSize: "30px",
    color: "green",
  },
  arrowRight: {
    fontSize: "inherit",
  },
  sadnessFase: {
    fontSize: "70px",
    color: "inherit",
  },
  eyeInput: {
    color: "inherit",
    fontSize: "inherit",
  },
  iconInput: {
    color: "inherit",
    fontSize: "inherit",
  },
};

export const AdminPanel = styled(AdminPanelSettingsIcon)`
  ${customStyles.iconInput}
`;

export const PhoneIconInput = styled(LocalPhoneIcon)`
  ${customStyles.iconInput}
`;

export const EmailIcon = styled(AlternateEmailIcon)`
  ${customStyles.iconInput}
`;

export const UserIconInput = styled(PersonOutlineIcon)`
  ${customStyles.iconInput}
`;

export const EyeIcon = styled(RemoveRedEyeIcon)`
  ${customStyles.eyeInput}
`;

export const CartForBtn = styled(AddShoppingCartIcon)`
  ${customStyles.cartForBtn}
`;

export const SadnessFace = styled(SentimentVeryDissatisfiedIcon)`
  ${customStyles.sadnessFase}
`;

export const DeliveryIcon = styled(AirportShuttleIcon)`
  ${customStyles.all}
`;

export const NewHomeIcon = styled(HomeIcon)`
  ${customStyles.all}
`;

export const ArrowRight = styled(ArrowRightIcon)`
  ${customStyles.arrowRight}
`;

export const UserIcon = styled(AccountCircleRoundedIcon)`
  ${customStyles.user}
`;

export const BackArrowIcon = styled(ArrowBackIcon)`
  ${customStyles.arrow}
`;

export const CartIcon = styled(AddShoppingCartIcon)`
  ${customStyles.cart}
`;

export const ScrollUpIcon = styled(KeyboardArrowUpIcon)`
  ${customStyles.scroll}
`;
export const BlogIcon = styled(FeedOutlinedIcon)`
  ${customStyles.all}
`;
export const ProductIcon = styled(ProductionQuantityLimitsOutlinedIcon)`
  ${customStyles.all}
`;
export const AboutIcon = styled(StoreOutlinedIcon)`
  ${customStyles.all}
`;
export const QuestionIcon = styled(HelpOutlineOutlinedIcon)`
  ${customStyles.all}
`;
export const PhoneIcon = styled(LocalPhoneOutlinedIcon)`
  ${customStyles.all}
`;
export const MailIcon = styled(MailOutlineIcon)`
  ${customStyles.all}
`;
export const LocationIcon = styled(LocationOnIcon)`
  ${customStyles.all}
`;
