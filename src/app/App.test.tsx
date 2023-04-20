import { render } from "@testing-library/react";
import App from "./App";
import {MsalReactTester} from "msal-react-tester";
import {MsalProvider} from "@azure/msal-react";

let msalTester: MsalReactTester

describe("Authentication Tests", () => {

  beforeEach(() => {
    msalTester = new MsalReactTester("Redirect")
    msalTester.spyMsal()
  })
  afterEach(() => msalTester.resetSpyMsal())


  test("App renders expected components when not authenticated", async () => {
    await msalTester.isNotLogged()
    const {getByTestId} = render(
      <MsalProvider instance={msalTester.client}>
        <App />
      </MsalProvider>
    );

    await msalTester.waitForRedirect()
    expect(getByTestId("home-test")).toBeNaN()
  });

  test("App renders expected components when authenticated", async () => {
    await msalTester.isLogged()
    const { getByTestId } = render(
      <MsalProvider instance={msalTester.client}>
        <App />
      </MsalProvider>
    );

    await msalTester.waitForRedirect()
    expect(getByTestId("home-test")).toBeInTheDocument()
  });
})


