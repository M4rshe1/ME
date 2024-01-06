import timeline from "../data/timeline.ts";
import TimelineItem from "./timelineItem.jsx";
import Title from "./title.jsx";

const Timeline = () => {
    return (
        <div>
            <Title>
                Timeline
            </Title>
            {timeline.map((item, index) => (
                <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    )
}

export default Timeline