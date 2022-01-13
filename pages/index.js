<App Background="#eee">
    <Router ux:Name="router" />

    <DockPanel>
        <JavaScript File="MainView.js"/>
        <StackPanel Dock="Top" Background="#3CB5D0">
            <StatusBarBackground/>
            <Fuse.iOS.StatusBarConfig Style="Light"/>
            <Panel ux:Name="navBar" Dock="Top" Height="50">
                <WhileCanGoBack>
                    <Panel ux:Name="backButton" Width="90" Height="50" Alignment="Left" 
                           Padding="20,0,0,0" HitTestMode="LocalBounds">
                        <DockPanel>
                            <Image File="arrow-left-white.png" Height="20" Color="#fff" Dock="Left"/>
                            <Text Alignment="Center" Margin="5,0,0,0" FontSize="18" Color="#fff" Dock="Right">
                                BACK
                            </Text>
                        </DockPanel>
                        <AddingAnimation>
                            <Change backButton.Opacity="0" Duration=".3" />
                        </AddingAnimation>
                        <RemovingAnimation>
                            <Change backButton.Opacity="0" Duration=".3" />
                        </RemovingAnimation>
                        <Clicked>
                            <GoBack />
                        </Clicked>
                    </Panel>
                </WhileCanGoBack>
            </Panel>
        </StackPanel>
        
        <BottomBarBackground Dock="Bottom" />
        
        <Navigator DefaultPath="mainPage">
            <Page ux:Template="mainPage">
                <ScrollView>
                    <StackPanel ItemSpacing="7" Margin="7">
                        <Each Items="{pages}">
                            <Panel Clicked="{clicked}" Height="50">
                                <Rectangle Layer="Background" CornerRadius="3" Color="#FF8362" />
                                <Text Value="{title}" Alignment="Center" Color="#fff" FontSize="15" />
                            </Panel>
                        </Each>
                    </StackPanel>
                </ScrollView>
                
                <AlternateRoot ParentNode="navBar">
                    <NavBarTitle>PAGES</NavBarTitle>
                </AlternateRoot>
            </Page>

            <SubPage ux:Template="subPage" navBar="navBar" />
        </Navigator>
    </DockPanel>
</App>
