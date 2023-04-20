import {MsalAuthenticationTemplate} from "@azure/msal-react";
import {InteractionType} from "@azure/msal-browser";


const App =  () => {
  return (
    <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
      <span data-testid="home-test">Hello</span>
    </MsalAuthenticationTemplate>
  )

}

export default App;
