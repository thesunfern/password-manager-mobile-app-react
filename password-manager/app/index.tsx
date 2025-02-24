import * as React from "react";
import { View } from "react-native";
import Animated, {
	FadeInUp,
	FadeOutDown,
	LayoutAnimationConfig,
} from "react-native-reanimated";
import { Info } from "~/lib/icons/Info";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { passwordDiary } from "./db/passwords.json";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Text } from "~/components/ui/text";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "~/components/ui/tooltip";
import Password from "./password";

const GITHUB_AVATAR_URI =
	"https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

export default function Screen() {
	const [progress, setProgress] = React.useState(78);

	function updateProgressValue() {
		setProgress(Math.floor(Math.random() * 100));
	}

	const sunnyPwd = passwordDiary[0];

	return (
		<View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
			{sunnyPwd.passwords.map(p => (
				<Password key={p.passId} passTitle={p.passTitle} />
			))}
		</View>
	);
}
