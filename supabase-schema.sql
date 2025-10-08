-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  author VARCHAR(100) NOT NULL DEFAULT 'Evertwine Team',
  tags TEXT[] DEFAULT '{}',
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on the slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Create an index on published_at for ordering
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read published posts
CREATE POLICY "Anyone can read published blog posts" ON blog_posts
  FOR SELECT USING (published_at IS NOT NULL AND published_at <= NOW());

-- Create a policy that allows authenticated users to insert posts (for admin use)
CREATE POLICY "Authenticated users can insert blog posts" ON blog_posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create a policy that allows authenticated users to update posts
CREATE POLICY "Authenticated users can update blog posts" ON blog_posts
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_blog_posts_updated_at 
  BEFORE UPDATE ON blog_posts 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, author, tags, published_at) VALUES
(
  'Welcome to Evertwine: Building Real Connections in a Digital World',
  'welcome-to-evertwine-building-real-connections',
  'Welcome to the official Evertwine blog! We''re excited to share our journey of building a platform that brings people together through shared interests and real-world connections.

In today''s digital age, it''s easy to feel disconnected despite being more "connected" than ever. Social media often creates the illusion of community without the substance of real relationships. That''s why we built Evertwine – to bridge the gap between digital convenience and authentic human connection.

## What Makes Evertwine Different

Unlike traditional social media platforms that keep you scrolling through endless feeds, Evertwine is designed to get you off your phone and into the real world. Our platform focuses on:

- **Local Discovery**: Find events and meetups happening right in your neighborhood
- **Interest-Based Matching**: Connect with people who share your passions
- **Real-World Interaction**: Build lasting friendships through face-to-face meetings
- **Community Building**: Create and strengthen local communities

## The Vision

We believe that the best connections happen when people come together around shared interests. Whether you''re passionate about photography, hiking, cooking, or happy hour meetups, Evertwine helps you find your tribe.

Our interactive map and smart filtering make it easy to discover events that match your interests and schedule. From weekend hiking groups to weekday happy hours, there''s always something happening in your community.

## Join the Movement

Ready to start building real connections? Download Evertwine today and discover what''s happening in your area. Follow this blog for tips on making the most of your Evertwine experience, community spotlights, and updates on new features.

Welcome to the Evertwine community – where interests become friendships.',
  'Welcome to the official Evertwine blog! We''re excited to share our journey of building a platform that brings people together through shared interests and real-world connections.',
  'Evertwine Team',
  ARRAY['community', 'welcome', 'social-networking'],
  NOW()
),
(
  '5 Tips for Making the Most of Happy Hour Meetups',
  '5-tips-happy-hour-meetups',
  'Happy hour meetups are one of the most popular ways people connect on Evertwine. These casual gatherings offer the perfect blend of relaxation and socializing. Here are our top tips for making the most of your happy hour experience:

## 1. Arrive Early (But Not Too Early)

Showing up 10-15 minutes early gives you the chance to:
- Get a good seat or standing spot
- Order your first drink before the crowd arrives
- Have one-on-one conversations with early arrivals
- Help set a welcoming tone for the group

## 2. Be Open to Conversations

Happy hours are perfect for casual, low-pressure conversations. Don''t feel like you need to have deep, meaningful discussions right away. Start with:
- Comments about the venue or drinks
- Questions about how people found the event
- Shared interests or experiences
- Light, fun topics

## 3. Try Something New

Happy hour specials often include unique cocktails or local brews you might not normally try. This is a great conversation starter and shows you''re open to new experiences.

## 4. Follow Up

The magic of happy hour meetups happens in the follow-up. If you connect with someone, don''t be afraid to:
- Exchange contact information
- Suggest meeting up again
- Invite them to other Evertwine events
- Add them on social media

## 5. Respect Everyone''s Choices

Remember that not everyone drinks alcohol. Many of our happy hour events include mocktail options and non-alcoholic beverages. Be respectful of everyone''s choices and focus on the social aspect rather than the drinking.

Happy hour meetups are about building connections, not just enjoying drinks. Keep an open mind, be yourself, and most importantly – have fun!',
  'Happy hour meetups are perfect for casual socializing. Here are our top tips for making meaningful connections during these relaxed gatherings.',
  'Evertwine Team',
  ARRAY['happy-hour', 'tips', 'socializing', 'networking'],
  NOW() - INTERVAL '2 days'
),
(
  'Building Community: The Power of Local Meetups',
  'building-community-power-local-meetups',
  'In our increasingly digital world, the importance of local community has never been greater. At Evertwine, we''ve seen firsthand how local meetups can transform neighborhoods and create lasting bonds between people.

## The Science of Community

Research shows that people who participate in regular local activities experience:
- **Improved Mental Health**: Regular social interaction reduces feelings of loneliness and depression
- **Increased Life Satisfaction**: Being part of a community provides a sense of belonging and purpose
- **Better Physical Health**: Social connections can boost immune system function and longevity
- **Enhanced Creativity**: Diverse groups spark new ideas and perspectives

## How Local Meetups Build Community

### 1. Shared Spaces
When people regularly gather in the same locations – whether it''s a local coffee shop, park, or community center – they begin to develop a sense of ownership and connection to that place.

### 2. Consistent Interaction
Unlike one-time events, regular meetups allow relationships to develop gradually. People get to know each other over time, building trust and familiarity.

### 3. Diverse Perspectives
Local meetups often bring together people from different backgrounds who live in the same area. This diversity strengthens the community by exposing everyone to new ideas and experiences.

### 4. Mutual Support
As relationships deepen, community members begin to support each other in various ways – from sharing job opportunities to helping with personal projects.

## The Evertwine Effect

We''ve seen communities form around all kinds of interests:
- **Photography groups** that explore the city together
- **Book clubs** that discuss literature over coffee
- **Fitness groups** that motivate each other to stay active
- **Happy hour regulars** who have become close friends

## Starting Your Own Community

Interested in building community in your area? Here''s how to get started:

1. **Identify a Need**: What interests or activities are missing in your community?
2. **Start Small**: Begin with a simple, regular gathering
3. **Be Consistent**: Pick a regular time and place
4. **Welcome Everyone**: Make your events inclusive and accessible
5. **Be Patient**: Community building takes time

## Join the Movement

Every strong community starts with one person willing to bring people together. Download Evertwine today and discover what''s already happening in your area, or start your own meetup and watch your community grow.

Together, we can build stronger, more connected neighborhoods – one meetup at a time.',
  'Local meetups have the power to transform neighborhoods and create lasting bonds. Discover how community building works and why it matters more than ever.',
  'Evertwine Team',
  ARRAY['community', 'local-meetups', 'social-connection', 'neighborhood'],
  NOW() - INTERVAL '5 days'
);
