let b = [ f, f, f, f, f, f, f, t, t, t ]

lo = 0;
hi = b.length;

do {
    m = math.floor(lo + (hi - lo)/2);
    v = b[m]

    if (!v && b[hi])    // then true index is above m
        lo = m + 1      
    else if (v && !b[lo])
        hi = m

} while (lo !== hi)