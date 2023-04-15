import './index.css';

export const TaskBanner = () => {

    let tasks = ["Zapakuj paczki z magazynu", "Odbierz dziecko z przedszkola"];
    let dropped = false;

    return (
        <div class="task-banner-container">
            {
                dropped === true ? (
                    tasks
                ) : (
                    tasks[0]
                )
            }   
        </div>
    );
}