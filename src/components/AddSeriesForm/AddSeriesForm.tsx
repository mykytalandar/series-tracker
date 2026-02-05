import { useContext, useState } from "react";
import type { SeriesFormData } from "../../types/Series";
import { SeriesContext } from "../../context/SeriesContext";

export const AddSeriesForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [season, setSeason] = useState<number | ''>('');
    const [episode, setEpisode] = useState<number | ''>('');
    const [minute, setMinute] = useState<number | ''>('');

    const { addSeries } = useContext(SeriesContext);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!title || !season || !episode || !minute) {
            return;
        }

        const newSeries: SeriesFormData = {
            title: title,
            season: season,
            episode: episode,
            minute: minute,
        }

        addSeries(newSeries);

        setTitle('');
        setSeason(1);
        setEpisode(1);
        setMinute(0);
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
                    onChange={(e) => setSeason(e.target.value === '' ? '' : +e.target.value)}
                    placeholder="Сезон"
                />
                <input
                    type="number"
                    value={episode}
                    onChange={(e) => setEpisode(e.target.value === '' ? '' : +e.target.value)}
                    placeholder="Серия"
                />
                <input
                    type="number"
                    value={minute}
                    onChange={(e) => setMinute(e.target.value === '' ? '' : +e.target.value)}
                    placeholder="Минута"
                />
                <input type="submit" />
            </div>
        </form>
    );
}