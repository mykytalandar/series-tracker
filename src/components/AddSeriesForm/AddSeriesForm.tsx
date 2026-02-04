import { useState } from "react";
import { useSeries } from "../../features/useSeries/useSeries";

export const AddSeriesForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [season, setSeason] = useState(1)
    const [episode, setEpisode] = useState(1)
    const [minute, setMitune] = useState(0);

    const { series, addSeries } = useSeries();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!title || !season || !episode || !minute) {
            return;
        }

        const newSeries = {
            title: title,
            season: season,
            episode: episode,
            minute: minute,
        }

        addSeries(title, season, episode, minute);
    }

    return (
        <form action="/" onSubmit={handleSubmit} className="form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название сериала"
            />
            <div>
                <input
                    type="number"
                    value={season}
                    onChange={(e) => setSeason(+e.target.value)}
                    placeholder="Сезон"
                />
                <input
                    type="number"
                    value={episode}
                    onChange={(e) => setEpisode(+e.target.value)}
                    placeholder="Серия"
                />
                <input
                    type="number"
                    value={minute}
                    onChange={(e) => setMitune(+e.target.value)}
                    placeholder="Минута"
                />
                <input type="submit" />
            </div>
        </form>
    );
}