import { View } from "react-native";
import { passwordDiary } from "./db/passwords.json";
import { Card, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

type Fields = {
	fieldid: string;
	fieldTitle: string;
	fieldValue: string;
	fieldTypeId: number;
};

type Password = {
	passId: string;
	passTitle: string;
	fields: Fields;
};

const Password = (props: any) => {
	return (
		<Card className="w-full max-w-sm p-6 rounded-2xl">
			<CardHeader className="items-center">
				<View className="p-3" />
				<CardTitle className="pb-2 text-center">{props.passTitle}</CardTitle>
			</CardHeader>
			<CardFooter className="flex-col gap-3 pb-0">
				<Button variant="outline" className="shadow shadow-foreground/5">
					<Text>Update</Text>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default Password;
