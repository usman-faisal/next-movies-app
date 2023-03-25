import React from 'react';

const LoadingMoviesSkeleton = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-movie">
                <div className="skeleton-movie__img"></div>
                <div className="skeleton-movie__content" />
            </div>
        </div>
    );
};

export default LoadingMoviesSkeleton;
