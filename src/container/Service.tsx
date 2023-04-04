import EngineringService from "../component/content/services/EngineringService";
import ManufactringService from "../component/content/services/ManufactringService";

//home
function Service() {
    return (
        <div>
            <div>
                <EngineringService />
            </div>
            <div>
                <ManufactringService />
            </div>
        </div>
    );
}

export default Service;

