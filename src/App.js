import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Button, Card, View, withAuthenticator } from "@aws-amplify/ui-react";

function App({ signOut }) {
	return (
		<View className="App">
			<Card>
				<h1>HII</h1>
			</Card>
			<Button onClick={signOut}>Sign Out</Button>
		</View>
	);
}

export default withAuthenticator(App);
