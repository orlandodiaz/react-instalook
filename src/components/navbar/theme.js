import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import * as colors from "@material-ui/core/colors/";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#2962FF"
    },
    secondary: indigo // Indigo is probably a good match with pink
  }
});
