import { TextInput, View } from "react-native";
import SearchbarStyle from "./Searchbar.style";

const Searchbar = ({ handleSubmitSearch }) => {
  return (
    <TextInput
      onSubmitEditing={(e) => handleSubmitSearch(e.nativeEvent.text)}
      style={SearchbarStyle.txtInput}
      placeholder="Chercher une ville... Ex: Dakar"
    />
  );
};

export default Searchbar;
