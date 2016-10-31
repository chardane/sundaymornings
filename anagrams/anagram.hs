#! /usr/bin/env runhaskell

import Data.ByteString (sort)
import Data.ByteString.Char8 (pack)
import Distribution.Simple.Utils (lowercase)

anagram :: String -> String -> Bool
anagram s1 s2 = sort (pack s1') == sort (pack s2') where
    s1' = lowercase s1
    s2' = lowercase s2

main :: IO ()
main =print $ anagram "code" "dojo"
