"use client";
function Error({error,reset}:
    {
        error: Error
        reset: () => void
    }
) {
    return (
        <div>
            {error.message} текст сообщения
            <p>
                <button onClick={reset}>Try again</button>
            </p>
        </div>
    );
}

export default Error;