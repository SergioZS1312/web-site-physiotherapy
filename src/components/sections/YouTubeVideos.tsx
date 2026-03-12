'use client';

export const youtubeVideoIds = [
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
];

const YouTubeVideos = () => {
	return (
		<section id="youtube-videos" className="bg-muted-50 px-6 py-20 md:px-[8%] md:py-28">
			<div className="mx-auto max-w-7xl">
				<div className='mb-12 text-center md:mb-16'>
					<h2 className={'text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700'}>
						Resultados reales
					</h2>
					<p className='mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg'>
						Mira los procesos de recuperación de nuestros pacientes
					</p>
				</div>

				{/* Videos Grid */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{youtubeVideoIds.map((videoId, index) => (
						<div key={index} className="overflow-hidden rounded-xl shadow-lg">
							<div className="relative aspect-video w-full">
								<iframe
									src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
									title={`Video ${index + 1}`}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="absolute inset-0 h-full w-full"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default YouTubeVideos;
