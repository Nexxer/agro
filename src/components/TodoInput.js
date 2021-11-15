function InputForm({ handleChange, handleSubmit, item }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span class="input-group-text text-white bg-dark">
                            <i class="fa-lg fas fa-clipboard-list"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control border border-primary"
                        placeholder="Введите название задачи"
                        aria-label="Введите название задачи"
                        aria-describedby="button-add"
                        onChange={handleChange}
                        value={item}
                        required
                    />

                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit" id="button-add">
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default InputForm;
