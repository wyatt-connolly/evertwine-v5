-- Update Skylar's blog post about getting first 100 users
UPDATE blog_posts SET
  title = 'How Skylar used social media to get the first 100 users for his relationship app',
  author = 'Skylar Greggory (CEO)',
  excerpt = 'Meet Skylar Gregory, co-founder of Evertwine, and learn how he used social media to acquire the first 100 users for his relationship app focused on bringing people together in person.',
  content = '# How Skylar used social media to get the first 100 users for his relationship app

Meet Skylar Gregory. Skylar is based in Tempe, Arizona (USA). He is the co-founder of Evertwine, a mobile app with a simple but powerful mission: to bring people together in person through shared interests. His journey to this point has been shaped by a lifelong entrepreneurial drive and a passion for building connections, both in business and in his personal life as an avid gym-goer and sports enthusiast.

![Skylar Gregory - Co-founder of Evertwine](/skylar-blog.jpg)

## The story told by Skylar Gregory

### My entrepreneurial journey

I recently graduated from Arizona State University with a degree in Business Entrepreneurship, but my entrepreneurial journey began long before that. After my freshman year, I launched a successful pressure washing company, learning firsthand the challenges and rewards of building something from the ground up. While that venture was profitable, I felt a pull toward solving a more profound problem, one I saw affecting my peers and my generation directly. This led me to dedicate myself fully to Evertwine.

### What is Evertwine?

The idea for Evertwine was born from a paradox: despite being the most digitally connected generation in history, Gen Z is also one of the loneliest. This isn''t just a statistic to me; it''s a reality I''ve seen play out. The concept was truly solidified when a classmate shared a story about her friend who, after moving to Miami a socially connected city, still struggled to make friends. It was a clear sign that the old ways of meeting people were no longer enough. We needed a new solution, not just another app for endless online chatting, but a tool focused on creating fulfilling, real-world relationships. My co-founder and I designed Evertwine to be that solution.

Eventwine is a mobile app that helps people combat loneliness by facilitating in-person meetups based on shared activities, whether it''s grabbing coffee, going for a hike, or finding a new gym partner. The platform is built on a pillar of simplicity. Users can browse a map or an explore feed to find activities happening nearby, create their own one-on-one or group meetups, and easily connect with others who share their interests.

### Starting out

Our journey began in July 2023, initially with the idea of building a better dating app. However, we eventually recognized that the market was incredibly saturated and that our true passion lay in fostering platonic connections. In October 2024, we pivoted to our current activity-based model, officially launching on January 1st 2025. The first few months were a quiet beta period focused on development.

### Marketing wins

Building a community from scratch is a formidable challenge. We acquired our first 100 users in about a month, primarily through bootstrapped, organic promotion on platforms like Reddit, X, LinkedIn, as well as word-of-mouth. This was our main marketing push beginning May 2025.',
  published_at = '2025-08-15T00:00:00.000Z',
  featured_image = '/skylar-blog.jpg',
  tags = ARRAY['entrepreneurship', 'social media', 'user acquisition', 'startup', 'marketing'],
  updated_at = NOW()
WHERE slug = 'how-skylar-used-social-media-to-get-first-100-users';
