import datetime

class Movie:
    """A Movie is an object that stores information for a particular movie (assumed
    to be played in a particular theatre). As in the real-world, a movie has "showtimes",
    the times when its theatre is screening it, a "name", and a "runtime" (its duration in
    minutes).

    Parameters
    ----------
    name: a string.
    runtime: a non-negative integer. Represents the duration of the movie, in minutes.
    showtime: a string to be cast to a datetime object, representing when the movie starts.

    Returns
    -------
    Movie: ...
    """
    def __init__(self, name, runtime, showtime, showtime_format='%H:%M'):
        if runtime <= 0:
            raise ValueError('runtime must be a positive integer')

        self.start = datetime.datetime.strptime(showtime, showtime_format)

        self.runtime = datetime.timedelta(minutes=runtime)
        self.name = name

        self.end = self.start + self.runtime

    def __str__(self):
        output =  '%s (%s min): showing from %s to %s' % \
                  (self.name, str(self.runtime.total_seconds() / 60), self.start, self.end)
        return(output)

    def __repr__(self):
        output = "Movie(name=%r, runtime=%r, start=%r, end=%r)" % (self.name, self.runtime, self.start, self.end)
        return(output)
