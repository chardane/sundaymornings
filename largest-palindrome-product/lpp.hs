palindrome :: [Char] -> Bool
palindrome x = x == reverse x

result = maximum [ x*y | x <- [999,998..100], y <- [999,998..100], x >= y && palindrome (show (x*y))]

main = putStrLn $ show result
