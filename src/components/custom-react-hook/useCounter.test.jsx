import { renderHook } from "@testing-library/react";
import useCounter from "./useCounter";
import { act } from "react-dom/test-utils";

describe('testing useCounter hook', () => { 
    test('should render the initial count', () => {
        const { result } = renderHook(() => useCounter({initialValue:0}))
        expect(result.current.count).toBe(0);
    })    

    test('should render the initial count', () => {
        const { result } = renderHook(useCounter, {
            initialProps:{
                initialValue:10
            }
        })
        expect(result.current.count).toBe(10)
    })

    test('test increment count', () => {
        const { result } = renderHook(() => useCounter({initialValue : 0}))
        act(() => result.current.increment()) 
        expect(result.current.count).toBe(1)
    })

    test('test decrement count', () => {
        const { result } = renderHook(() => useCounter({initialValue : 0}))
        act(() => result.current.decrement())
        expect(result.current.count).toBe(-1)
    })
})