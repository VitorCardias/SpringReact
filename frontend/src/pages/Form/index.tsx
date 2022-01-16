import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function form() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams();

    return (
        <FormCard movieId ={`${params.movieId}`} />
    );
}
export default form;