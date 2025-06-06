import { useCounterStore } from './stores/increment';
export default function App() {
    const { count, increment, decrement } = useCounterStore()

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-red-500 text-3xl mb-4">Hello world</h1>
            <p className="text-lg">Count: {count}</p>
            <div className="space-x-4 mt-4">
                <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">
                    -
                </button>
                <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded">
                    +
                </button>
            </div>
        </div>
    )
}