import * as React from "react";
import { View } from "react-native";
import { passwordDiary } from "./db/passwords.json";
import Password from "./password";

export default function Dashboard() {
	const sunnyPwd = passwordDiary[0];

	return (
		<View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
			{sunnyPwd.passwords.map(p => (
				<Password key={p.passId} passTitle={p.passTitle} />
			))}
		</View>
	);
}
