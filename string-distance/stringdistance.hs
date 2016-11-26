#!/usr/bin/env runhaskell

import Data.List
import System.Environment

levenshtein :: String -> String -> Int
levenshtein sa sb = last $ foldl transform [0..length sa] sb 
   where
      transform xs@(x:xs') c = scanl compute (x+1) (zip3 sa xs xs') 
         where
            compute z (c', x, y) = minimum [y+1, z+1, x + fromEnum (c' /= c)]

main = do
 x:y:args <- getArgs 
 putStrLn (show $ levenshtein (x) (y))
 
