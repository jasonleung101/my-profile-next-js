import React from "react";
import SkillBubble from "../../components/skills/bubble";

type Props = {}

export default function Skills({ }: Props) {
    return (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
        <SkillBubble name={"Flutter"} percent={"80"} />
        <SkillBubble name={"Java"} percent={"50"} />
        <SkillBubble name={"React.JS"} percent={"60"} />
        <SkillBubble name={"Android"} percent={"60"} />
        <SkillBubble name={"iOS"} percent={"60"} />
        <SkillBubble name={"C"} percent={"40"} />
        <SkillBubble name={"VSCode"} percent={"80"} />
        <SkillBubble name={"Android Studio"} percent={"80"} />
        <SkillBubble name={"AWS"} percent={"40"} />
        <SkillBubble name={"Node.JS"} percent={"60"} />
        <SkillBubble name={"Next.JS"} percent={"60"} />
        </div>
    )
}