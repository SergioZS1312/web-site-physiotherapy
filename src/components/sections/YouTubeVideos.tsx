'use client';

// Replace YouTube embeds with local/hosted video files.
// Put your MP4/WebM files in the `public/videos/` folder and update the array below.
export const videoSources = [
	'/videos/video.mp4',
	'/videos/video.mp4',
	'/videos/video.mp4',
];

const YouTubeVideos = () => {
	return (
		<section id="youtube-videos" className="bg-muted-50 px-6 py-20 md:px-[8%] md:py-28">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 text-center md:mb-16">
					<h2 className={'text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-primary-700'}>
						Resultados reales
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-600 sm:mt-6 sm:text-lg">
						Mira los procesos de recuperación de nuestros pacientes
					</p>
				</div>

				{/* Videos Grid (local files) */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{videoSources.map((src, index) => (
						<div key={index} className="overflow-hidden rounded-xl shadow-lg">
							<div className="w-full bg-black flex items-center justify-center">
								<video
									src={src}
									controls
									preload="metadata"
									className="w-auto h-[55vh] max-w-full object-contain"
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
